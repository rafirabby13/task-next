
import Link from 'next/link'
import React from 'react'

const AdminDashboard = ({adminData}) => {
    console.log(adminData)
    const {name, images, id} = adminData
    const primaryImage = images?.[0]?.image_url

    return (
        <div className="p-6">
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 max-w-sm mx-auto">
                {/* Image container with overlay */}
                <div className="relative h-64 overflow-hidden">
                    {primaryImage ? (
                        <>
                            <img
                                src={primaryImage}
                                alt={name || "Admin item"}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            
                            {/* Image count badge */}
                            {images && images.length > 1 && (
                                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                                    +{images.length - 1} more
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                            <div className="text-gray-400 text-center">
                                <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <p className="text-sm">No image</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Content section */}
                <div className="p-6 space-y-4">
                    {/* Title section */}
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                            {name || 'Unnamed Item'}
                        </h3>
                        
                        {/* ID badge */}
                        <div className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600">
                            ID: {id}
                        </div>
                    </div>

                

                    {/* Action buttons */}
                    <div className="flex gap-3 pt-2">
                        <Link 
                            href={`detail/${id}`} 
                            className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 text-center transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            View Details
                        </Link>
                        
                        
                    </div>
                </div>

                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-2xl ring-2 ring-blue-500 ring-opacity-0 group-hover:ring-opacity-50 transition-all duration-300 pointer-events-none"></div>
            </div>
        </div>
    )
}

export default AdminDashboard