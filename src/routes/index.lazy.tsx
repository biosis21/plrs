import stylex from '@stylexjs/stylex';
import { createLazyFileRoute } from '@tanstack/react-router';

import { AboutCard } from './-components/about-card';
import { Button } from './-components/button';
import { Jumbotron } from './-components/jumbotron';
import { NewsCard } from './-components/news-card';
import { Section } from './-components/section';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

const styles = stylex.create({
  base: {},
  card: {
    width: {
      default: '100%',
      '@media (min-width: 768px)': '50%',
    },
  },
  findDealerButton: {
    display: 'inline-block',
    marginTop: '20px',
  },
  findDealerDesc: {
    fontSize: '24px',
  },
  aboutCard: {
    width: {
      default: '100%',
      '@media (min-width: 768px)': '50%',
    },
  },
});

function Index() {
  return (
    <main {...stylex.props(styles.base)}>
      <Jumbotron title="POLARIS - THINK OUTSIDE">
        In 1954, our founders created an early snowmobile to better travel through northern Minnesota winter. Ever
        since, that same ingenuity and ability to THINK OUTSIDE has driven Polaris and our brands forward as we pioneer
        product breakthroughs and enriching experiences that help people work and play outside.
      </Jumbotron>
      <Section title="WHAT’S NEW" as="h2">
        <Section.Content>
          <NewsCard
            href="/"
            image="https://cdn1.polaris.com/globalassets/ranger/2024/sledgehammer/polaris/whats-new/update/1-indian-my25-464a-polaris-homepage-whats-new-50-lg.jpg?v=c5ed6c58"
            className={styles.card}
          >
            <NewsCard.Title>Introducing The All-New 2025 Scout Lineup</NewsCard.Title>
            <NewsCard.Desc>WHAT'S NEW</NewsCard.Desc>
          </NewsCard>
          <NewsCard
            href="/"
            image="https://cdn1.polaris.com/globalassets/ranger/2024/model/model-pages/common/indian-my25-464a-polaris-homepage-whats-new-ranger-lg.jpg?v=c5893082"
            className={styles.card}
          >
            <NewsCard.Title>Meet the 2025 RANGER Full-Size Lineup</NewsCard.Title>
            <NewsCard.Desc>SEE WHAT'S NEW</NewsCard.Desc>
          </NewsCard>
        </Section.Content>
      </Section>
      <Jumbotron title="FIND A DEALER" variant="primary">
        <p {...stylex.props(styles.findDealerDesc)}>Let us help you find your local dealer.</p>
        <Button className={styles.findDealerButton}>DEALER LOCATOR</Button>
      </Jumbotron>
      <Section title="POLARIS INC." as="h2">
        <Section.Desc>Learn more about how we THINK OUTSIDE.</Section.Desc>
        <Section.Content noGap></Section.Content>
      </Section>
      <Section noGutters>
        <Section.Content noGap>
          <AboutCard
            href="/"
            className={styles.aboutCard}
            image="https://cdn1.polaris.com/globalassets/crp/2023/corporate/homepage/07-polaris-inc/polaris-95f3-polaris-inc-01-lg.jpg?v=ace41474"
          >
            <AboutCard.Category>Our DNA</AboutCard.Category>
            <AboutCard.Title>About Polaris</AboutCard.Title>
          </AboutCard>
          <AboutCard
            href="/"
            className={styles.aboutCard}
            image="https://cdn1.polaris.com/globalassets/crp/2023/corporate/homepage/07-polaris-inc/polaris-95f3-polaris-inc-02-lg.jpg?v=ace41474"
          >
            <AboutCard.Category>In the Community</AboutCard.Category>
            <AboutCard.Title>Geared for Good</AboutCard.Title>
          </AboutCard>
          <AboutCard
            href="/"
            className={styles.aboutCard}
            image="https://cdn1.polaris.com/globalassets/crp/2023/corporate/homepage/07-polaris-inc/polaris-95f3-polaris-inc-03-lg.jpg?v=ace452d0"
          >
            <AboutCard.Category>Career Opportunities</AboutCard.Category>
            <AboutCard.Title>Join the Ride</AboutCard.Title>
          </AboutCard>
        </Section.Content>
      </Section>
    </main>
  );
}
