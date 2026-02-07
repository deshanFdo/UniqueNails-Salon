export default function ServiceCard({ icon, title, description, price, features }) {
    return (
        <div className="service-card">
            <div className="service-icon">
                {icon}
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            {features && (
                <ul style={{
                    listStyle: 'none',
                    textAlign: 'left',
                    marginBottom: '25px',
                    fontSize: '0.95rem',
                    color: 'var(--text-muted)'
                }}>
                    {features.map((feature, index) => (
                        <li key={index} style={{
                            padding: '8px 0',
                            borderBottom: '1px solid var(--border-color)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'
                        }}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="var(--accent-gold)"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                        </li>
                    ))}
                </ul>
            )}
            <div className="service-price">From {price}</div>
        </div>
    );
}
