import { InfoSection } from '../../components';
import infoSectionsContent from '../../fixtures/info-sections-content';

export default function InfoContainer() {
  return (
    <section>
      {infoSectionsContent.map((data) => (
        <InfoSection
          key={data.path}
          path={data.path}
          imgStart={data.imgStart}
          src={data.src}
          alt={data.alt}
          darkText={data.darkText}
          primaryBtn={data.primaryBtn}
          darkBg={data.darkBg}
          title={data.title}
          subtitle={data.subtitle}
        />
      ))}
    </section>
  );
}
