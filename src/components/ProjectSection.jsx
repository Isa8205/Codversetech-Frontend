export function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description:
        'Developed a comprehensive e-commerce platform for Retail Corp, enhancing their inventory management and customer experience.',
      imageUrl:
        'https://10web-site.ai/172/wp-content/uploads/sites/184/2025/01/tenweb_media_r4kgztpfv.webp',
      details: [
        'Client: Retail Corp',
        'Date: May 2023',
        'Outcome: Improved sales and customer satisfaction',
      ],
      link:
        'https://10web-site.ai/172/ready-ant/portfolio-project-e-commerce-platform-development/',
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      description:
        'Created a secure mobile banking application for Finance Solutions, allowing users to manage finances on the go.',
      imageUrl:
        'https://10web-site.ai/172/wp-content/uploads/sites/184/2025/01/tenweb_media_rbjaulcvs.webp',
      details: [
        'Client: Finance Solutions',
        'Date: November 2022',
        'Outcome: Enhanced user engagement and security',
      ],
      link:
        'https://10web-site.ai/172/ready-ant/portfolio-project-mobile-banking-application/',
    },
    {
      id: 3,
      title: 'Inventory Management System',
      description:
        'Designed an inventory management system for Logistics Inc., improving tracking and reporting capabilities significantly.',
      imageUrl:
        'https://10web-site.ai/172/wp-content/uploads/sites/184/2025/01/tenweb_media_rokl0zscz.webp',
      details: [
        'Client: Logistics Inc.',
        'Date: January 2023',
        'Outcome: Streamlined operations and reduced errors',
      ],
      link:
        'https://10web-site.ai/172/ready-ant/portfolio-project-inventory-management-system/',
    },
  ];

  return (
    <section className="py-12">
    <div className="max-w-5xl mx-auto px-6 text-center">
      <h5 className="text-lg font-medium text-gray-300">Our Work</h5>
      <h2 className="text-3xl font-bold mb-4">Showcasing Our Projects</h2>
      <p className="text-gray-300 max-w-2xl mx-auto mb-8">
        Explore our diverse portfolio that highlights our expertise in software development and innovative solutions.
      </p>
      <hr className="my-8 border-gray-700" />
      <div className="grid gap-8 md:grid-cols-3">
        {projects.map((project) => (
          <div key={project.id} className="bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-48 object-cover"
              src={project.imageUrl}
              alt={project.title}
            />
            <div className="p-6">
              <h5 className="text-xl font-semibold mb-2">{project.title}</h5>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <ul className="flex flex-col gap-2 mb-4">
                {project.details.map((detail, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-500">
                    <i className="fas fa-hashtag mr-2"></i>
                    {detail}
                  </li>
                ))}
              </ul>
              <a
                href={project.link}
                className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10 text-xs text-gray-500">
        Powered by 10web
      </div>
    </div>
  </section>
  );
};
