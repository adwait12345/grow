import Axios from "axios"

const axios = Axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL || "https://groww-intern-assignment.vercel.app/v1"}/api`,
})


export const fetcher = async <T>(url: string) => {
  try {
    const { data } = await axios.get<T>(url)
    return data
  } catch (error) {
    throw error
  }
}

export default axios