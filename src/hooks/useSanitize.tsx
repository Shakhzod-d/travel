import sanitizeHtml from 'sanitize-html';

const useSanitize = () => {
    const sanitize = (text: string) => {
        return sanitizeHtml(text, {
            allowedTags: [], 
            allowedAttributes: {} 
        })
    }
    return { sanitize }
}

export default useSanitize