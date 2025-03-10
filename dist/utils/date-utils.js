/**
 * Formats a date to show how many days ago it was
 * @param dateString - The date string to format
 * @returns A string representing how many days ago the date was
 */
export const daysAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    // Calculate the difference in milliseconds
    const diffMs = now.getTime() - date.getTime();
    // Convert to days
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    if (diffDays === 0) {
        return 'Today';
    }
    else if (diffDays === 1) {
        return 'Yesterday';
    }
    else if (diffDays < 30) {
        return `${diffDays} days ago`;
    }
    else if (diffDays < 365) {
        const months = Math.floor(diffDays / 30);
        return `${months} ${months === 1 ? 'month' : 'months'} ago`;
    }
    else {
        const years = Math.floor(diffDays / 365);
        return `${years} ${years === 1 ? 'year' : 'years'} ago`;
    }
};
