
export function catalogUrl(section: string, subcategory?: string): string {
    const params = new URLSearchParams({ section })
    if (subcategory) params.set('category', subcategory)
    return `/catalog?${params}`
}