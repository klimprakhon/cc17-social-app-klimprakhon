import { useContext } from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import PostItems from "./PostItems";
import { PostContext } from "../context/PostContext";

function Feed() {
  const { posts } = useContext(PostContext);
  return (
    <Box backgroundColor="#EEEFEF">
      <Stack spacing={1} p={4} sx={{ alignItems: "center" }}>
        <TextField sx={{ width: "450px" }} size="small" />
        <Button variant="contained" sx={{ width: "450px" }}>
          Create Post
        </Button>
        {posts.slice(0, 10).map((post) => {
          return (
            <PostItems key={post.id} title={post.title} body={post.body} />
          );
        })}
      </Stack>
    </Box>
  );
}

export default Feed;
