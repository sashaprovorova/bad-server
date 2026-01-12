import sanitizeHtml from 'sanitize-html'

export default function sanitizeText(value: unknown) {
    return sanitizeHtml(String(value ?? ''), {
        allowedTags: [],
        allowedAttributes: {},
    })
}
