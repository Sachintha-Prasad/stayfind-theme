import React from 'react'
import FAQs from '../../components/FAQ/FAQs'

const FAQSection = () => {
    const faqList = [
        {
            question: 'Can We Get Any Extra Services?',
            answer: "In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready. Think of a news blog that's filled with content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet. The are likely to focus on the text, disregarding the layout and its elements.",
        },
        {
            question: 'Can We get Any Transport For Walk?',
            answer: "In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready. Think of a news blog that's filled with content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet. The are likely to focus on the text, disregarding the layout and its elements.",
        },
        {
            question: 'Is This Collaborate with Oyo?',
            answer: "In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready. Think of a news blog that's filled with content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet. The are likely to focus on the text, disregarding the layout and its elements.",
        },
        {
            question: 'Can We get Any Transport For Walk?',
            answer: "In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready. Think of a news blog that's filled with content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet. The are likely to focus on the text, disregarding the layout and its elements.",
        },
    ]

    return (
        <section>
            <div className="container flex flex-col gap-6 py-6 md:flex-row">
                <div className="flex w-full flex-wrap justify-between gap-3 md:max-w-[300px] md:flex-col md:justify-start">
                    <h3 className="text-2xl font-semibold">
                        FAQ Regarding The Royal Plaza Scout
                    </h3>
                    <a
                        href="#"
                        className="cta-btn w-fit bg-blue px-6 text-base text-white"
                    >
                        Submit request
                    </a>
                </div>
                <FAQs faqList={faqList} />
            </div>
        </section>
    )
}

export default FAQSection
