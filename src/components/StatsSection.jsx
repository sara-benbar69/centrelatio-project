import React from 'react'
import { MessageCircle, Users, MessagesSquare, Star } from 'lucide-react'

const STATS = [
  { key: 'whatsapp', Icon: MessageCircle, value: '100%', label: 'Basé sur WhatsApp' },
  { key: 'users', Icon: Users, value: '+2 000', label: 'Entreprises et institutions' },
  { key: 'convos', Icon: MessagesSquare, value: '+1M', label: 'Conversations traitées' },
  { key: 'satisfaction', Icon: Star, value: '98%', label: 'Taux de satisfaction' },
]

export default function StatsSection() {
  return (
    <section className="stats-section public-site">
      <div className="container stats-card">
        <div className="stats-grid">
          {STATS.map(({ key, Icon, value, label }) => (
            <div key={key} className="stat-item">
              <div className="stat-icon">
                <Icon size={28} />
              </div>
              <div className="stat-text">
                <h3>{value}</h3>
                <span>{label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
