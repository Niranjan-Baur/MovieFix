
// this will format your date like this --> 19 May, 2024
export const dateFormatter = dt => {
    const date = new Date(dt);
    const formattedDate = date.toLocaleDateString('en-US', {
        day: 'numeric', // Use 2-digit padding for day (optional)
        month: 'long',
        year: 'numeric',
    });

    return formattedDate;
};


export const getColor = (vote) => {
    if (vote >= 0 && vote < 5) {
        return 'red';
    } else if (vote >= 5 && vote < 8) {
        return 'yellow';
    } else if (vote >= 8 && vote <= 10) {
        return 'green';
    } else {
        return 'white'; // default color or for out of range values
    }
};