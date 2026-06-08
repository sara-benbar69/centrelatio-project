import React from 'react'
import { BadgeDollarSign, Blocks, Building2, Link2, ShoppingBag, Webhook } from 'lucide-react'

const ITEMS = [
  { key: 'crm', tone: 'orange', Icon: Building2, title: 'CRM', desc: 'HubSpot, Salesforce, Zoho CRM...' },
  { key: 'ecom', tone: 'green', Icon: ShoppingBag, title: 'E-commerce', desc: 'Shopify, WooCommerce, PrestaShop...' },
  { key: 'tools', tone: 'dark', Icon: Blocks, title: 'Outils', desc: 'Slack, Trello, Notion...' },
  { key: 'marketing', tone: 'blue', Icon: Link2, title: 'Marketing', desc: 'Mailchimp, Sendinblue, Meta Ads...' },
  { key: 'payments', tone: 'yellow', Icon: BadgeDollarSign, title: 'Paiement', desc: 'Stripe, PayPal, Flutterwave...' },
  { key: 'api', tone: 'cyan', Icon: Webhook, title: 'API & Webhooks', desc: 'Connectez Centrelatio à vos outils.' },
]

export default function IntegrationsGrid() {
  return (
    <section id="integrations" className="integrations-section public-site">
      <div className="container">
        <h2 className="section-title">Des <span className="highlight-green">intégrations</span> puissantes</h2>
        <p className="section-subtitle">Connectez facilement Centrelatio à vos outils métiers et automatisez vos flux.</p>

        <div className="integrations-grid">
          {ITEMS.map(({ key, tone, Icon, title, desc }) => (
            <article key={key} className="integration-card card-hover" tabIndex={0}>
              <div className="integration-icon">
                <div className={`icon-circle icon-${tone}`}>
                  <Icon size={28} strokeWidth={1.5} />
                </div>
              </div>
              <div className="integration-copy">
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
