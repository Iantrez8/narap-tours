import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about NARAP Tours & Travel, our philosophy, and our commitment to extraordinary journeys across Kenya and beyond.',
};

export default function AboutPage() {
  return (
    <>
      <section className={styles.hero}>
        <Image
          src="https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=1920&q=80"
          alt="Two people looking over the Maasai Mara"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <p className={styles.overline}>About Us</p>
          <h1 className={styles.heroTitle}>The Craft of Travel</h1>
        </div>
      </section>

      <section className={`section ${styles.story}`}>
        <div className={`container ${styles.storyInner}`}>
          <div className={styles.storyText}>
            <p className={styles.lead}>
              We believe that travel is not just about where you go, but how you experience it. 
              Our journeys are designed for those who seek connection over consumption, who value 
              patience in the wild, and who want to experience Kenya at its most authentic.
            </p>
            <h2 className={styles.heading}>Our Philosophy</h2>
            <p className={styles.body}>
              NARAP Tours & Travel was founded on a simple principle: every traveller is different, 
              and their journey should be too. We don&apos;t sell packages off a shelf. Instead, we 
              listen. We learn what moves you, what you value in a stay, and what you hope to take 
              away from your time in Africa.
            </p>
            <p className={styles.body}>
              Then, we design. Using our deep local knowledge, relationships with the finest lodges 
              and camps, and understanding of the seasonal rhythms of the wild, we craft a private 
              journey that belongs only to you.
            </p>
            
            <h2 className={styles.heading}>The People</h2>
            <p className={styles.body}>
              A safari is only as good as the person sitting beside you in the vehicle. Our guides 
              are not just drivers; they are storytellers, naturalists, and custodians of the land. 
              They understand the subtle signs of the bush, the behavior of the animals, and the 
              history of the communities that share these spaces.
            </p>
          </div>
          <div className={styles.storyImages}>
            <div className={styles.imageWrapper1}>
              <Image
                src="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800&q=80"
                alt="Maasai guide in the savannah"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.imageWrapper2}>
              <Image
                src="https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80"
                alt="Elephant in the wild"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={`section section--lg ${styles.responsible}`}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="text-overline">Conservation</p>
          <h2 className={styles.responsibleTitle}>Responsible Travel</h2>
          <p className={styles.responsibleBody}>
            We believe that tourism must be a force for good. We partner exclusively with camps and lodges 
            that prioritize community engagement, wildlife conservation, and sustainable practices. When you 
            travel with us, your journey directly contributes to the protection of Kenya&apos;s natural heritage 
            and the empowerment of its people.
          </p>
        </div>
      </section>
    </>
  );
}
