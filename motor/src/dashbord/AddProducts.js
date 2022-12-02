import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

export const AddProducts = () => {

    const { user } = useContext(AuthContext);
    const { register, handleSubmit, reset } = useForm();

    const navigate = useNavigate()

    const stamp = new Date().getTime()

    const onSubmit = data => {

        const advertise = false
        const wishlist = false
        const verified = false
        const timeStamp = stamp

        const product_name = data.product_name
        const product_description = data.message
        const original_price = data.or_price
        const resell_price = data.re_price
        const used_time = data.use_duration
        const product_condition = data.condition
        const category_id = data.category_id
        const seller_mobile = data.mobile
        const seller_location = data.pickUp_location
        const seller_name = data.seller_name
        const seller_email = data.seller_email

        let category_name
        if (category_id === '637f7fc50a9cd6168efe98b5') {
            category_name = "Honda"
        } else if (category_id === '637f7fc50a9cd6168efe98b6') {
            category_name = "KTM"
        } else if (category_id === '637f7fc50a9cd6168efe98b7') {
            category_name = "Suzuki"
        } else if (category_id === '637f7fc50a9cd6168efe98b8') {
            category_name = "Yamaha"
        }


        const formData = new FormData()
        formData.append('image', data.product_image[0])

        fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_image_api}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {

                const addProduct = {
                    product_name,
                    product_img: data.data.display_url,
                    product_description,
                    original_price,
                    resell_price,
                    used_time,
                    product_condition,
                    category_id,
                    category_name,
                    seller_mobile,
                    seller_location,
                    seller_name,
                    seller_email,
                    advertise,
                    wishlist,
                    verified,
                    timeStamp

                }

                // sending the data to server

                fetch(`${process.env.REACT_APP_url}/api/add/product`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(addProduct),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data)
                        if (data.acknowledged) {
                            toast.success('Product Added')
                            reset();
                            navigate("/dashbord/my-products")
                        }
                    })

            })

    }

    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap -m-2">
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="name" className="leading-7 text-md text-gray-600">Product Name</label>
                                <input type="text" id="name" name="name" {...register("product_name")} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="image" accept="image/*" className="leading-7 text-md text-gray-600">Product Image</label>
                                <input type="file" id="image" name="image" {...register("product_image", { required: true })} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>

                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="or_price" className="leading-7 text-md text-gray-600">Original Price</label>
                                <input type="number" id="or_price" name="or_price" {...register("or_price")} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="re_price" className="leading-7 text-md text-gray-600">Resale Price</label>
                                <input type="number" id="re_price" name="re_price" {...register("re_price")} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>

                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="use_duration" className="leading-7 text-md text-gray-600">Years of Use</label>
                                <input type="number" id="use_duration" name="use_duration" {...register("use_duration")} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>

                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="condition" className="leading-7 text-md text-gray-600">Condition Type</label>
                                <select id="condition" {...register("condition", { required: true })} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-[10px] px-3 leading-8 transition-colors duration-200 ease-in-out">
                                    <option value="">Select...</option>
                                    <option value="Fair">Fair</option>
                                    <option value="Good">Good</option>
                                    <option value="Excellent">Excellent</option>
                                </select>
                            </div>
                        </div>

                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="category" className="leading-7 text-md text-gray-600">Category Name</label>
                                <select id="category" {...register("category_id", { required: true })} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-[10px] px-3 leading-8 transition-colors duration-200 ease-in-out">
                                    <option value="">Select...</option>
                                    <option value="637f7fc50a9cd6168efe98b5">Honda</option>
                                    <option value="637f7fc50a9cd6168efe98b6">KTM</option>
                                    <option value="637f7fc50a9cd6168efe98b7">Suzuki</option>
                                    <option value="637f7fc50a9cd6168efe98b8">Yamaha</option>
                                </select>
                            </div>
                        </div>

                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="mobile" className="leading-7 text-md text-gray-600">Mobile Number</label>
                                <input type="number" id="mobile" name="mobile" {...register("mobile")} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>

                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="pickUp_location" className="leading-7 text-md text-gray-600">Pick Up Location</label>
                                <input type="text" id="pickUp_location" name="pickUp_location" {...register("pickUp_location")} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>

                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="message" className="leading-7 text-md text-gray-600">Product Description</label>
                                <textarea id="message" name="message" {...register("message")} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                        </div>

                        <div className="flex flex-col w-full border-opacity-50">
                            <div className="divider text-lg">Additional Info</div>
                        </div>

                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="user_name" className="leading-7 text-md text-gray-600">Your Name</label>
                                <input type="text" id="user_name" name="user_name" readOnly value={user?.displayName} {...register("seller_name")} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>

                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="user_email" className="leading-7 text-md text-gray-600">Your Email</label>
                                <input type="email" id="user_email" readOnly name="user_email" value={user?.email} {...register("seller_email")} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>

                        <div className="p-2 mt-5 w-full">
                            <button className="flex mx-auto btn btn-primary text-gray-200 border-0 py-2 px-8 rounded text-lg">Add Product</button>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    )
}
