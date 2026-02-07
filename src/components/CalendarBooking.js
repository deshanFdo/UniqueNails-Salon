'use client';

export default function CalendarBooking() {
    const calendarUrl = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_URL || '';

    // Only render if calendar URL is configured
    if (!calendarUrl || calendarUrl.includes('YOUR_CALENDAR_ID')) {
        return (
            <div className="calendar-placeholder">
                <div className="calendar-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                </div>
                <h4>Online Booking Coming Soon</h4>
                <p>Call us to schedule your appointment</p>
                <a href="tel:+15551234567" className="btn btn-outline" style={{ marginTop: '20px' }}>
                    +1 (555) 123-4567
                </a>

                <style jsx>{`
          .calendar-placeholder {
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            padding: 60px 40px;
            text-align: center;
            border-radius: 4px;
          }
          .calendar-icon {
            color: var(--accent-gold);
            margin-bottom: 20px;
          }
          h4 {
            font-family: var(--font-display);
            font-size: 1.25rem;
            margin-bottom: 10px;
            color: var(--text-primary);
          }
          p {
            color: var(--text-muted);
            font-size: 1rem;
          }
        `}</style>
            </div>
        );
    }

    return (
        <div className="calendar-embed">
            <iframe
                src={calendarUrl}
                style={{
                    border: 0,
                    width: '100%',
                    height: '600px',
                    background: 'var(--bg-card)'
                }}
                frameBorder="0"
                scrolling="no"
                title="Book an Appointment"
                loading="lazy"
            />

            <style jsx>{`
        .calendar-embed {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          padding: 20px;
          border-radius: 4px;
          overflow: hidden;
        }
      `}</style>
        </div>
    );
}
