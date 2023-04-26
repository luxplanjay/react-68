import ContentLoader from 'react-content-loader';

export const DogSkeleton = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="240" y="10" rx="2" ry="2" width="140" height="10" />
    <rect x="242" y="30" rx="2" ry="2" width="140" height="10" />
    <rect x="9" y="7" rx="2" ry="2" width="220" height="220" />
    <rect x="241" y="52" rx="0" ry="0" width="138" height="12" />
  </ContentLoader>
);
