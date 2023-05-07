interface SocialsCardProps {
  // define the props for the SocialsCard component here
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      SocialsCard: SocialsCardProps;
    }
  }
}
export default function SocialsCard() {
  return <></>;
}
