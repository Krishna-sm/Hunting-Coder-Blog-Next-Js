// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Blogs from '../../../blog/blogs.json';
export default function handler(req, res) {
  if(req.method==="GET")
  {
     return res.send({
          success:"failed",
          msg:"Get Method Not allowed"
      })

  }


  res.send({
      success:"success",
      msg:"data found",
      data:Blogs
  })
}
