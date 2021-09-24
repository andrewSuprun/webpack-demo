import Post from './Post'
import json from './asssets/json.json'
import WebpackLogo from './asssets/icon.png'
import './styles/styles.css'


const post = new Post('Webpack post title', WebpackLogo)

console.log('Post to String:  ', post.toString())

console.log('JSON: ', json)