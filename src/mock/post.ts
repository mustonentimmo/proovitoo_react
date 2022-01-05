import { Post } from "../common/types"

const posts: Post[] = [
    {
        id: 1,
        title: "Practical Functional Programming",
        postImg: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1478&q=80",
        author: "Timmo Mustonen",
        publishedAt: "16.12.2021",
        postText: "The following is reformatted from a presentation I gave at LinkedIn last year. The presentation attempted to explain functional programming without using concepts like “monads” or “immutability” or “side effects”. Instead it focuses on how thinking about composition can make you a better programmer, regardless of what language you use.",
        postTags: ["#learning", "#react"],
        postFeedback: ["5 views", "3 comments", "2 likes"]
    },
    {
        id: 2,
        title: "Writing CSS with Accessibility in Mind",
        postImg: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1478&q=80",
        author: "Timmo Mustonen",
        publishedAt: "16.12.2021",
        postText: "The following is reformatted from a presentation I gave at LinkedIn last year. The presentation attempted to explain functional programming without using concepts like “monads” or “immutability” or “side effects”. Instead it focuses on how thinking about composition can make you a better programmer, regardless of what language you use.",
        postTags: ["#CSS"],
        postFeedback: ["5 views", "3 comments", "2 likes"]
    }
]

export default posts;