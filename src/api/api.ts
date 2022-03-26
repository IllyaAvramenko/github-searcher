import axios from "axios"

export const instance = axios.create({
   baseURL: 'https://api.github.com/'
})

export type APIResponseType<T = {}> = {
   total_count: number,
   incomplete_results: boolean,
   items: Array<T>
}