import React from 'react'

const BrandCarousel = () => {
  const brands = [
    // Ecommerce & Shopify - Using local logos
    { name: "Shopify", logo: "/125-1258224_shopify-logo-white-e-commerce-free-logo-hd.png", category: "Ecommerce" },
    { name: "WooCommerce", logo: "/png-transparent-woocommerce-logo-landscape-tech-companies.png", category: "Ecommerce" },
    { name: "Magento", logo: "/magento-logo-icon-hd-png-701751694968127smfdayuwdf.png", category: "Ecommerce" },
    { name: "BigCommerce", logo: "/big-commerce-logo-11609355823zjt0brznrn.png", category: "Ecommerce" },
    
    // Fintech - Using local logos
    { name: "Stripe", logo: "/hd-stripe-official-logo-png-701751694777755j0aa3puxte.png", category: "Fintech" },
    { name: "Mastercard", logo: "/hd-mastercard-payment-logo-transparent-background-701751694777780z7xaiuu0sh.png", category: "Fintech" },
    { name: "PayPal", logo: "/transparent-hd-paypal-logo-701751694777788ilpzr3lary.png", category: "Fintech" },
    { name: "Square", logo: "/png-transparent-squarespace-logo-icon.png", category: "Fintech" },
    
    // Design & Framer - Using local logos
    { name: "Framer", logo: "/png-transparent-framer-blue-logo-tech-companies-thumbnail.png", category: "Design" },
    { name: "Figma", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1200px-Figma-logo.svg.png", category: "Design" },
    { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Adobe_Systems_logo_and_wordmark.svg/1200px-Adobe_Systems_logo_and_wordmark.svg.png", category: "Design" },
    { name: "Sketch", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Sketch_Logo.svg/1200px-Sketch_Logo.svg.png", category: "Design" },
    
    // WordPress & CMS
    { name: "WordPress", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/WordPress_Blue_logo.svg/1200px-WordPress_Blue_logo.svg.png", category: "CMS" },
    { name: "Contentful", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Contentful_logo.svg/1200px-Contentful_logo.svg.png", category: "CMS" },
    { name: "Sanity", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Sanity_Logo.svg/1200px-Sanity_Logo.svg.png", category: "CMS" },
    { name: "Strapi", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Strapi_logo.svg/1200px-Strapi_logo.svg.png", category: "CMS" },
    
    // Tech & Cloud
    { name: "Vercel", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Vercel_logo_black.svg/1200px-Vercel_logo_black.svg.png", category: "Cloud" },
    { name: "Netlify", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Netlify_logo.svg/1200px-Netlify_logo.svg.png", category: "Cloud" },
    { name: "DigitalOcean", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/DigitalOcean_logo.svg/1200px-DigitalOcean_logo.svg.png", category: "Cloud" },
    { name: "Cloudflare", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Cloudflare_Logo.svg/1200px-Cloudflare_Logo.svg.png", category: "Cloud" }
  ]

  return (
    <section className="brand-carousel-section">
      <div className="brand-carousel-container">
        <div className="brand-carousel-header">
          <h2 className="brand-carousel-title">Trusted by Leading Brands</h2>
          <p className="brand-carousel-subtitle">Building solutions for companies worldwide</p>
        </div>
        
        <div className="brand-carousel-wrapper">
          <div className="brand-carousel-track">
            {/* First set of brands */}
            {brands.map((brand, index) => (
              <div key={index} className="brand-item">
                <div className="brand-logo-container">
                  <img 
                    src={brand.logo} 
                    alt={brand.name}
                    className="brand-logo"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {brands.map((brand, index) => (
              <div key={`duplicate-${index}`} className="brand-item">
                <div className="brand-logo-container">
                  <img 
                    src={brand.logo} 
                    alt={brand.name}
                    className="brand-logo"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandCarousel
