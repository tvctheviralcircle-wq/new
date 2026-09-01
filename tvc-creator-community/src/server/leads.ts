import { createServerFn } from '@tanstack/react-start'
import { WhopClient } from '@whop/sdk'

const COMPANY_ID = 'biz_IOOnT9DnSjsGGP'
// Hidden tag product — used purely to group every lead from this funnel
// into one filterable list in the Whop CRM (People > Leads > filter by product).
const FUNNEL_PRODUCT_ID = 'prod_W3pIlfwXtzxNN'
const FUNNEL_TAG = '@tvc-creator-community-booking'

async function getWhopClient() {
  let origin = 'https://api.whop.com'
  let token = 'placeholder'
  try {
    const { env } = await import('cloudflare:workers')
    origin = env.WHOP_API_ORIGIN ?? origin
    token = env.WHOP_API_KEY ?? token
  } catch {
    // Not running in a Workers runtime (e.g. local non-CF context); fall back to defaults.
  }
  return new WhopClient({ token, baseUrl: `${origin}/api/v1` })
}

export type QualifyLeadInput = {
  name: string
  email: string
  brand: string
  sellingOnTiktokShop: string
  sendingSamples: string
  referrer?: string
}

export const submitQualifyLead = createServerFn({ method: 'POST' })
  .validator((input: QualifyLeadInput) => input)
  .handler(async ({ data }) => {
    try {
      const client = await getWhopClient()
      const lead = await client.leads.create({
        company_id: COMPANY_ID,
        product_id: FUNNEL_PRODUCT_ID,
        referrer: data.referrer ?? null,
        metadata: {
          tag: FUNNEL_TAG,
          name: data.name,
          email: data.email,
          brand: data.brand,
          selling_on_tiktok_shop: data.sellingOnTiktokShop,
          sending_samples: data.sendingSamples,
          source: 'tvc-creator-community-funnel',
        },
      })
      return { ok: true as const, leadId: lead.id }
    } catch (error) {
      console.error('Failed to create lead', error)
      return { ok: false as const, error: 'lead_creation_failed' }
    }
  })
