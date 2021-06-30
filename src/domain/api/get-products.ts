import axios from 'axios';

export const getProductsApi = async (content: string) => {
    try {
        const response = await axios.post(`https://mystique-v2-americanas.juno.b2w.io/`, {
            params: {
                content: content,
                source: 'nanook'
            }
        })
        console.log(response)
    } catch (error) {
        console.log(error);
    }
}