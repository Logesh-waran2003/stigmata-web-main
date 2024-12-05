import{j as e,y as r,N as i,r as m,L as c}from"./index-HZXVzyJt.js";import{c as n}from"./avatar-B7a0kSvp.js";import{b as a}from"./blogData-C4KhOxxj.js";const o=t=>(document.title="Rent Car Service - "+t.title,e.jsx("div",{className:"w-100",children:t.children})),p=()=>{const{slug:t}=r(),s=a.find(l=>l.title===t);return s?(m.useEffect(()=>{window.scrollTo(0,0)},[s]),e.jsx(o,{title:s.title,children:e.jsx("section",{children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:e.jsxs("div",{className:"lg:flex gap-8",children:[e.jsxs("div",{className:"lg:w-2/3 md:w-full",children:[e.jsxs("div",{className:"blog__details",children:[e.jsx("img",{src:s.imgUrl,alt:"",className:"w-full"}),e.jsx("h2",{className:"section__title mt-4 text-2xl font-semibold",children:s.title}),e.jsxs("div",{className:"blog__publisher flex items-center gap-4 mb-4",children:[e.jsxs("span",{className:"blog__author flex items-center gap-1 text-titleBlue",children:[e.jsx("i",{className:"ri-user-line"})," ",s.author]}),e.jsxs("span",{className:"flex items-center gap-1 text-gray-600",children:[e.jsx("i",{className:"ri-calendar-line"})," ",s.date]}),e.jsxs("span",{className:"flex items-center gap-1 text-gray-600",children:[e.jsx("i",{className:"ri-time-line"})," ",s.time]})]}),e.jsx("p",{className:"text-lg text-gray-700",children:s.description}),e.jsx("h6",{className:"ps-5 font-normal",children:e.jsx("blockquote",{className:"text-xl text-gray-600",children:s.quote})}),e.jsx("p",{className:"text-lg text-gray-700",children:s.description})]}),e.jsxs("div",{className:"comment__list mt-5",children:[e.jsx("h4",{className:"mb-5 text-xl font-semibold",children:"1 Comments"}),e.jsxs("div",{className:"single__comment flex gap-3 mb-4",children:[e.jsx("img",{src:n,alt:"",className:"w-16 h-16 rounded-full border-2 border-blue-900 object-cover"}),e.jsxs("div",{className:"comment__content",children:[e.jsx("h6",{className:"font-semibold",children:"Stigmata Team"}),e.jsx("p",{className:"text-gray-600 mb-0",children:"14 July, 2022"}),e.jsx("p",{className:"text-gray-700",children:"Great post! I really enjoyed reading this article. The insights about modern web development trends are spot on. Keep up the good work!"}),e.jsx("span",{className:"replay flex items-center gap-1 text-blue-900 font-semibold cursor-pointer"})]})]}),e.jsxs("div",{className:"leave__comment-form mt-5",children:[e.jsx("h4",{className:"text-xl font-semibold",children:"Leave a Comment"}),e.jsx("p",{className:"text-gray-600",children:"You must sign-in to make or comment a post"}),e.jsxs("form",{children:[e.jsxs("div",{className:"flex gap-3 mb-4",children:[e.jsx("input",{type:"text",placeholder:"Full name",className:"w-full py-2 px-3 border border-gray-300 rounded-md"}),e.jsx("input",{type:"email",placeholder:"Email",className:"w-full py-2 px-3 border border-gray-300 rounded-md"})]}),e.jsx("div",{children:e.jsx("textarea",{rows:"5",className:"w-full py-2 px-3 border border-gray-300 rounded-md",placeholder:"Comment..."})}),e.jsx("button",{className:"btn comment__btn mt-3 bg-blue-900 text-white py-2 px-4 rounded-md",children:"Post a Comment"})]})]})]})]}),e.jsxs("div",{className:"lg:w-1/3 md:w-full mt-8 lg:mt-0",children:[e.jsx("div",{className:"recent__post mb-4",children:e.jsx("h5",{className:"font-semibold",children:"Recent Posts"})}),a.map(l=>e.jsx("div",{className:"recent__blog-post mb-4",children:e.jsxs("div",{className:"recent__blog-item flex gap-3",children:[e.jsx("img",{src:l.imgUrl,alt:"",className:"w-1/4 rounded-2xl"}),e.jsx("h6",{children:e.jsx(c,{to:`/blogs/${l.title}`,className:"text-titleBlue font-semibold hover:underline",children:l.title})})]})},l.id))]})]})})})})):e.jsx(i,{to:"/404"})};export{p as default};
