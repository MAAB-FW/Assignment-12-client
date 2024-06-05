import React from "react"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import useAuth from "@/hooks/useAuth"
import SmallLoading from "@/components/SmallLoading"
import useAxiosSecure from "@/hooks/useAxiosSecure"

const MyPosts = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: myPosts, isFetching } = useQuery({
        queryKey: ["myPosts"],
        queryFn: async () => {
            const res = await axiosSecure(`/myPosts/${user.email}`)
            // console.log(res.data)
            return res.data
        },
        initialData: [],
    })
    console.log(myPosts[0])
    if (isFetching) return <SmallLoading />

    return (
        <div className="/min-h-[50vh] pb-12">
            <h2 className="text-xl mb-6 font-semibold leading-7 text-gray-900">My Posts</h2>
            <div>
                <Table>
                    <TableCaption>A list all of your posts.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="pr-0">Post Title</TableHead>
                            <TableHead className="w-[100px] whitespace-nowrap">Number of votes</TableHead>
                            <TableHead colspan="2" className="text-center">
                                Action
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {myPosts.map((post) => (
                            <TableRow key={post._id}>
                                <TableCell className="font-medium min-w-52">{post.postTitle}</TableCell>
                                <TableCell className="text-center">{post.upVote}</TableCell>
                                <TableCell className="text-right">
                                    <Button>
                                        <Link to={`/comments/${post._id}`}>Comment</Link>
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button className="bg-red-500 hover:bg-red-700">Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default MyPosts
