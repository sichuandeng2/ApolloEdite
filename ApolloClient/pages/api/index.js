import { replace } from "formik";

export default function handle(req,res) {
    console.log(req)
    res.statusCode= 200,
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ name: 'John Doe' }))
}