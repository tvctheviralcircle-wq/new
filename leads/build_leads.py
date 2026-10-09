import csv
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment
from openpyxl.utils import get_column_letter
from openpyxl.worksheet.table import Table, TableStyleInfo

D='/home/user/new/leads/'
rows=list(csv.DictReader(open(D+'raw_gb_2026-09.tsv'),delimiter='\t'))
det={r['seller_id']:r for r in csv.DictReader(open(D+'details_gb.tsv'),delimiter='\t')}

# shops seen in >1 category ranking (category GMV summed) or verified shop-wide 28d GMV
over={
 '7494637938115578408':'Also £28.1K in Tools & Hardware ranking → combined ≈ £57.4K',
 '7495530049968704292':'Also £19.9K in Kitchenware ranking → combined ≈ £39.0K',
 '7494991028040600241':'Also £22.6K in Home Improvement ranking → combined ≈ £46.2K',
 '7496227861658634853':'Also £24.5K in Home Improvement ranking → combined ≈ £35.6K',
 '7494909659372751142':'Also £10.7K (Household Appliances) and £23.3K (Luggage & Bags) rankings → combined ≈ £55.1K',
 '7494844328726595706':'Also £42.6K (Home Improvement) and £34.4K (Automotive) → well above band',
 '7494686896434349919':'Also £23.1K in Automotive ranking → combined ≈ £46.8K',
 '7496293536374033352':'Also £23.0K in Automotive ranking → combined ≈ £33.6K',
 '7494567052463147208':'Also £63.1K in Household Appliances ranking → well above band',
 '7495320015950547394':'Verified shop-wide last-28-day GMV = £33,617 (56.9% product card, 43.1% affiliate)',
}
def conf(r):
    if r['seller_id'] in over: return 'Low – likely above £30K'
    if r['ranked_in_category']!=r['main_category']: return 'Medium – may sell in other categories'
    return 'High'

hdr=['Category (ranked in)','Shop name','Company / legal name','Main category','Shop type',
 'Sep-26 GMV in category (£)','Units sold','GMV MoM growth','Units MoM growth','Affiliate creators (Sep)',
 'Products with sales','Active products','Shop rating','Band confidence','Notes',
 'TikTok handle','TikTok profile URL','TikTok followers','TikTok videos','Shop created',
 'All-time GMV (£)','All-time units','Total products listed','All-time affiliate creators','All-time videos','All-time lives',
 'Min price (£)','Max price (£)','Avg price (£)','Delivery rate','Positive feedback','Response rate',
 'Category rank (Sep)','UK overall rank (Sep)','Seller ID']
order={'High':0}
rows.sort(key=lambda r:(r['ranked_in_category'],-float(r['gmv_gbp'])))
wb=Workbook(); ws=wb.active; ws.title='UK Leads'
F='Arial'
ws.append(hdr)
for r in rows:
    d=det.get(r['seller_id'],{})
    num=lambda k,f=float:(f(d[k]) if d.get(k) not in (None,'') else None)
    pct=lambda k:(float(d[k])/100 if d.get(k) not in (None,'') else None)
    h=d.get('tiktok_handle','')
    ws.append([r['ranked_in_category'],r['shop_name'],r['company_name'] or None,r['main_category'],
      'UK local' if r['shop_type']=='local' else 'Cross-border',
      float(r['gmv_gbp']),int(r['units_sold']),float(r['gmv_growth_pct'])/100,float(r['units_growth_pct'])/100,
      int(r['affiliate_creators']),int(r['products_with_sales']),int(r['active_products']),float(r['shop_rating']),
      conf(r),over.get(r['seller_id']) or (None if d or True else None),
      h or None,(f'https://www.tiktok.com/@{h}' if h else None),
      num('tiktok_followers',int) if h else None,num('tiktok_videos',int) if h else None,d.get('shop_created') or None,
      num('alltime_gmv_gbp'),num('alltime_units',int),num('total_products',int),num('alltime_creators',int),
      num('alltime_videos',int),num('alltime_lives',int),num('price_min'),num('price_max'),num('avg_price'),
      pct('delivery_rate_pct'),pct('positive_feedback_pct'),pct('response_rate_pct'),
      num('category_rank_sep',int),num('uk_rank_sep',int),r['seller_id']])
    if d and not h: ws.cell(ws.max_row,15).value=(ws.cell(ws.max_row,15).value or '')+('; ' if ws.cell(ws.max_row,15).value else '')+'No linked TikTok brand account found'
n=ws.max_row
fmt={6:'£#,##0',7:'#,##0',8:'0.0%',9:'0.0%',10:'#,##0',18:'#,##0',19:'#,##0',21:'£#,##0',22:'#,##0',
     24:'#,##0',25:'#,##0',26:'#,##0',27:'£0.00',28:'£#,##0.00',29:'£0.00',30:'0%',31:'0%',32:'0%',33:'#,##0',34:'#,##0'}
for row in ws.iter_rows(min_row=1,max_row=n):
    for c in row:
        c.font=Font(name=F,size=10,bold=(c.row==1),color=('FFFFFF' if c.row==1 else None))
        if c.row>1 and c.column in fmt: c.number_format=fmt[c.column]
        if c.row>1 and c.column==17 and c.value: c.hyperlink=c.value; c.font=Font(name=F,size=10,color='0563C1',underline='single')
for c in ws[1]: c.fill=PatternFill('solid',fgColor='1F3864'); c.alignment=Alignment(wrap_text=True,vertical='center')
ws.row_dimensions[1].height=42
widths={1:24,2:28,3:32,4:24,5:12,14:30,15:46,16:22,17:36,35:22}
for i in range(1,len(hdr)+1): ws.column_dimensions[get_column_letter(i)].width=widths.get(i,13)
for i,col in [(15,'FCE4D6'),]: pass
fills={'High':'E2EFDA','Medium – may sell in other categories':'FFF2CC','Low – likely above £30K':'FCE4D6'}
for rr in range(2,n+1):
    v=ws.cell(rr,14).value; ws.cell(rr,14).fill=PatternFill('solid',fgColor=fills[v])
ws.freeze_panes='C2'
t=Table(displayName='UKLeads',ref=f'A1:{get_column_letter(len(hdr))}{n}')
t.tableStyleInfo=TableStyleInfo(name='TableStyleLight9',showRowStripes=True); ws.add_table(t)

# Summary sheet with formulas
s=wb.create_sheet('Category Summary')
s.append(['Category','Leads found','High confidence','With TikTok profile data','Avg Sep GMV in category (£)','Rows searched (ranking page)'])
pages={'Automotive & Motorcycle':'p4','Baby & Maternity':'p4','Beauty & Personal Care':'p30 (+p50 units-sorted)','Collectibles':'p5',
 'Computers & Office Equipment':'p2','Fashion Accessories':'p8','Food & Beverages':'p10','Health':'p12','Home Improvement':'p6',
 'Home Supplies':'p15 (+p50 units-sorted)','Household Appliances':'p12',"Kids' Fashion":'p3','Kitchenware':'p5','Menswear & Underwear':'p10',
 'Muslim Fashion':'p5','Pet Supplies':'p3','Phones & Electronics':'p15','Sports & Outdoor':'p10','Textiles & Soft Furnishings':'p7',
 'Tools & Hardware':'p3','Toys & Hobbies':'p6','Womenswear & Underwear':'p50 units-sorted (p25 was above band)','Shoes':'p6','Luggage & Bags':'p3'}
cats=sorted(set(r['ranked_in_category'] for r in rows))
for i,c in enumerate(cats,start=2):
    s.append([c,f"=COUNTIF('UK Leads'!$A$2:$A${n},A{i})",
      f"=COUNTIFS('UK Leads'!$A$2:$A${n},A{i},'UK Leads'!$N$2:$N${n},\"High\")",
      f"=COUNTIFS('UK Leads'!$A$2:$A${n},A{i},'UK Leads'!$P$2:$P${n},\"<>\")",
      f"=AVERAGEIF('UK Leads'!$A$2:$A${n},A{i},'UK Leads'!$F$2:$F${n})", pages.get(c,'')])
m=s.max_row
s.append(['Total',f'=SUM(B2:B{m})',f'=SUM(C2:C{m})',f'=SUM(D2:D{m})',None,None])
for c in ['Furniture']:
    s.append([c,0,0,0,None,'Checked one page – still above £30K; band is deeper (not reached on trial credits)'])
for row in s.iter_rows():
    for c in row:
        c.font=Font(name=F,size=10,bold=(c.row==1 or row[0].value=='Total'),color=('FFFFFF' if c.row==1 else None))
        if c.column==5 and c.row>1: c.number_format='£#,##0'
for c in s[1]: c.fill=PatternFill('solid',fgColor='1F3864'); c.alignment=Alignment(wrap_text=True)
for i,w in enumerate([30,12,14,16,18,60],1): s.column_dimensions[get_column_letter(i)].width=w

# Notes
nt=wb.create_sheet('Read Me')
notes=[
 'UK TikTok Shop lead list – shops doing £10K–£30K',
 '',
 'Source: FastMoss MCP, monthly shop rankings for TikTok Shop UK (region GB), period = September 2026 (latest completed month; closest available to "last 28 days").',
 'Pulled: 8 Oct 2026. All money values are GBP as reported by FastMoss.',
 '',
 'How it was built',
 '• FastMoss has no GMV-range filter, and each ranking stops at 500 shops. The overall UK ranking bottoms out at ~£36K, so £10–30K shops only appear inside category rankings.',
 '• One ranking page (10 shops) was pulled per category at the depth where GMV falls into £10–30K. Only shops inside the band were kept.',
 '• This is a SAMPLE of each category\'s band, not every shop in it: the free trial allows ~100 credits/day and 1 page = 1 credit.',
 '',
 'Important caveat on GMV',
 '• "Sep-26 GMV in category" is the shop\'s sales WITHIN that category, not its total. Shops that sell across categories can be bigger overall.',
 '• Band confidence: High = ranked in its own main category; Medium = ranked outside its main category; Low = we saw evidence it is above £30K in total.',
 '• "UK overall rank (Sep)" is a useful cross-check: UK rank 500 ≈ £36K/month, so ranks well above ~700 are consistent with the band.',
 '',
 'Profile columns (TikTok handle → UK overall rank) were filled for 54 UK-based shops, chosen to cover every category. The rest are blank to save credits.',
 'Contact data: FastMoss does not provide emails/phones for shops. The TikTok handle / profile URL is the outreach route; company name helps with Companies House / LinkedIn lookups.',
 '',
 'Not covered yet: Furniture (band is deeper than page 2); Books and other small categories were not probed.',
 'Update 9 Oct 2026: added Shoes (10) and Luggage & Bags (7) leads. Next daily trial batch (100 credits) unlocks 10 Oct 03:53 FastMoss time.',
]
for l in notes: nt.append([l])
nt.column_dimensions['A'].width=140
for row in nt.iter_rows():
    for c in row: c.font=Font(name=F,size=10,bold=(c.row in (1,6,11))); c.alignment=Alignment(wrap_text=True)
nt['A1'].font=Font(name=F,size=14,bold=True)
wb.move_sheet('Read Me',offset=-2)
wb.save(D+'UK_TikTok_Shop_Leads_10K-30K.xlsx')
print(n-1,'leads')
