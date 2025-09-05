import React from 'react'

interface AboutArticleProps {
  content: {
    title: string;
    paragraphs: string[];
  };
}

function AboutArticle({ content }: AboutArticleProps) {
    return (
        <section className='py-[50px] md:py-[90px]'>
            <div className='container   text-center px-4'>
                <article className='max-w-[900px] mx-auto'>
                    {content.paragraphs.map((paragraph, index) => (
                        <p key={index} className='text-lg text-[#223140] my-4 leading-relaxed'>
                            {paragraph}
                        </p>
                    ))}
                </article>
            </div>
        </section>
    )
}

export { AboutArticle }