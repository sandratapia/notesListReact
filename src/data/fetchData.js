const fetchFromApi = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    return fetch(url)
        .then((response) => response.json())
        .then((data) => {
            return data.filter((note) => note.id <= 8)
            .map((note) => {
                return {
                    userId: 1,
                    id: note.id,
                    title: note.title,
                    body: note.body,
                };
            });

        });
};

export default fetchFromApi;
