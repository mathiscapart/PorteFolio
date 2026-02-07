export function Line({ largeur }: { largeur: number }) {
    const marginClasses: Record<number, string> = {
        10: 'mx-10',
        25: 'mx-25',
        50: 'mx-50',
        100: 'mx-100'
    };
    
    return (
        <hr className={`border-t-3 border-black ${marginClasses[largeur]}`} />
    );
}
