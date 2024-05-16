<template>
    <TopNav/>
    <SideBar/>
    <div class="min-h-screen bg-gray-100 dark:bg-gray-900 overflow-hidden">
          <div class="p-4 sm:ml-60">
             <div class="rounded-lg mt-14">
                 <!-- Page Content -->
                 <slot/>
                </div>
                <Footer class="mt-4 right-0 w-full pl-60"/>
            </div>
        </div> 
</template>