const FB = () => {
    return (
        <div class="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden">
        {/* Post Header */}
            <div class="flex items-center p-4 border-b">
                {/*<img src="profile-picture.jpg" alt="Profile Picture" class="w-10 h-10 rounded-full mr-2"></img>*/}
            <div>
                <p class="font-semibold text-gray-800">John Doe</p>
                <p class="text-gray-500 text-sm">Posted 2 hours ago</p>
            </div>
        </div>

        {/* Post Content */}
        <div class="p-4">
            <p class="text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>

        {/* Post Image (if applicable) 
        <img src="post-image.jpg" alt="Post Image" class="w-full h-64 object-cover">
        */}
        {/* Post Actions */}
        <div class="flex items-center justify-between p-4 border-t">
            <div class="flex items-center space-x-4">
                <button class="flex items-center space-x-2 text-gray-600">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                    <span>Like</span>
                </button>
                <button class="flex items-center space-x-2 text-gray-600">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    <span>Comment</span>
                </button>
            </div>
                <button class="flex items-center space-x-2 text-gray-600">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                    <span>Share</span>
                </button>
            </div>
        </div>
    );
};

export default FB;