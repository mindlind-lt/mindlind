import "./service-block.css";

type ServiceBlockProps = {
  title: string;
  children: React.ReactNode;
};

export function ServiceBlock({ title, children }: ServiceBlockProps) {
  return (
    <div className="service-block">

        <div className="service-block-header">
            <div className="container">
                <h3 className="service-block-title">{title}</h3>
            </div>
        </div>

        <div className="service-block-items">
            {children}
        </div>

    </div>
  );
}
