import React from 'react'

function Article() {
    return (
        <section className='py-[50px] md:py-[90px]'>
            <div className='container'>
                <article className='& : [&>h2]:text-4xl [&>h2]:font-bold [&>h2]:text-[#0D0D0D] [&>h2]:mb-4 [&>p]:text-lg [&>p]:text-[#223140] [&>p]:my-4'>
                    <h2>Özel Sağlık Sigortası Nedir?</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the 
                    </p>
                    <p>
                    moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain 
                    </p>
                </article>
            </div>
        </section>
    )
}

export { Article }