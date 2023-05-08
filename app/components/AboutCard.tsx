interface AboutCardProps {
  // define the props for the SocialsCard component here
  className?: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      AboutCard: AboutCardProps;
    }
  }
}

export default function AboutCard({ className = "" }: AboutCardProps) {
  return <div>AboutCard</div>;
}
