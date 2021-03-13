export const companyDescription = {
  subHeading: ["Think Digital Marketing", "Think KOKO Media"],
  text: [
    "KOKO Media is built on family, friendships and most importantly RESULTS.",
    "We’re committed to establishing strong relationships with our clients, colleagues and industry partners to create business solutions and effective campaigns for you.",
    "We are confident in creating strategies to make you STAND OUT and ABOVE your competitors.",
    "We have taken our knowledge and implemented it in a range of businesses in ",
    "Hospitality, Finance and Retail to name a few.",
  ],
};

export const contactUsDescription = [""];

export const servicesDescription = [
  {
    title: "Website Design & Development",
    identifier: 'webdev',
    link: "/web-development",
    text:
      "We Understand Consumer Behaviour to how to Convert More Customers…..and that’s why your website needs to be attractive at a glance. Physchology plays a large part in how we develop your brand and website. Developing an eye catching and easy to read website is first and foremost for us. So building complex & responsive websites is a big part of our business. WordPress & squarespace  are our platform of choice however if you are interested in heavier detailed websites we also work with Javascript and are always ready for any kind of project in the development space. For us, it’s fun!",
  },
  {
    title: "Social Media Management",
    identifier: 'smm',
    link: "/social-media-mgmt",
    text:
      "Social Media is an essential piece of your marketing strategy. Social Media platforms help you connect with your customers, increase awareness about your brand, boost your sales and increase leads. We can offer you Social Media strategies, content creation, platform and campaign management on Social media management across Instagram, Facebook, and google.  Linkedin and Youtube Paid ads Influencer marketing Performance reporting Active networking and community management.",
  },
  {
    title: "Graphic Design",
    identifier: 'design',
    link: "/graphic-design",
    text:
      "Whether you’re interested in building a business, or promoting a product, service, or brand we understand the importance of deliverables which are high quality, visually-appealing, and relevant to the business or brand that it’s representing. We help you create visual Identity through  brochures, one-pagers, posters, social media graphics Illustrations &  Product packaging",
  },
  // {
  //   title: "Content creation",
  //   identifier: 'creative',
  //   link: "/content-creation",
  //   text:
  //     "Creating cinematic videos and eye catching professional images is an integral part of showcasing your brand and reaching out to your current and potential audiences. Our creative digital team will help you bring your business to life using top tier equipment and editing skills",
  // },
  {
    title: "Google (SEO)",
    identifier: 'seo',
    link: "/seo",
    text:
      "Appear #1 in search results. Our proven Search Engine Optimization (SEO) strategies will improve traffic and bring more potential customers to your website. We do this by tailoring unique SEO campaigns based on data, world leading technology and an extensive understanding of search engine algorithms to increase your online visibility.",
  },
  {
    title: "Branding",
    identifier: 'brand',
    link: "/branding",
    text:
      "Branding is far more than just your logo. We look in depth at how we can develop a brand with personality and trust. At KOKO Media we view branding as the prime gateway to how customers and employees envision the future of your business. We want to create a memorable and desirable brand that everyone can continue to recall. McDonald’s isn’t where they are today by just placing and M as their logo. There is science and psychology behind colours and the simplicity of the brand.  We help you develop the best and most relative brand awareness. But hey, if you want a simple logo and that's it, we can do that too!",
  },
];

export const specificService = (serviceName) => {
  return servicesDescription.find(service => service.identifier === serviceName);
}