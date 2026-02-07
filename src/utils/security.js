// Utility to sanitize user input - prevents XSS attacks
export function sanitizeInput(input) {
    if (typeof input !== 'string') return input;

    return input
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;');
}

// Validate email format
export function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Validate phone number (basic international format)
export function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[(]?[0-9]{1,3}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,9}$/;
    return phoneRegex.test(phone);
}

// Sanitize form data object
export function sanitizeFormData(formData) {
    const sanitized = {};
    for (const [key, value] of Object.entries(formData)) {
        sanitized[key] = sanitizeInput(value);
    }
    return sanitized;
}

// Rate limiting helper (client-side)
const rateLimitMap = new Map();

export function checkRateLimit(action, maxAttempts = 5, windowMs = 60000) {
    const now = Date.now();
    const key = action;

    if (!rateLimitMap.has(key)) {
        rateLimitMap.set(key, { count: 1, firstAttempt: now });
        return true;
    }

    const record = rateLimitMap.get(key);

    if (now - record.firstAttempt > windowMs) {
        rateLimitMap.set(key, { count: 1, firstAttempt: now });
        return true;
    }

    if (record.count >= maxAttempts) {
        return false;
    }

    record.count++;
    return true;
}

// Generate CSRF-like token for form submissions
export function generateFormToken() {
    if (typeof window === 'undefined') return '';
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}
