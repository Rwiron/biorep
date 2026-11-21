import { Link } from 'react-router-dom';
import { ArrowRight } from '../components/icons';
import ArticleLayout from './ArticleLayout';

export default function NewsArticle4() {
  return (
    <ArticleLayout slug="uvu-bio-bootcamp">
      <p className="lead">
        BioRep Labs has completed the Rwanda Biotech Enterprise Development Programme, a bootcamp held at the UVU Bio
        Rwanda Bioeconomy Hub in Kigali.
      </p>

      <p>
        Our founder and Chief Scientific Officer, Alex K. Mugengana, PhD, received the programme certificate on behalf
        of BioRep Labs, alongside the other participants in the cohort.
      </p>

      <h2>About the hub</h2>
      <p>
        The Rwanda Bioeconomy Hub is run by UVU Bio, a non-profit organisation working to drive innovation and growth
        across Africa&apos;s bioeconomy. It is an open-access biotech laboratory on the Nyarugenge campus of the
        University of Rwanda&apos;s College of Science and Technology, and it offers skills development and
        entrepreneurial training programmes. The hub was unveiled in September 2024.
      </p>

      <h2>Why it matters to us</h2>
      <p>
        Developing a new therapy takes more than laboratory science. A research-led company also needs the business
        foundations to carry a discovery through to the patients who need it. The programme was a chance to strengthen
        that side of BioRep Labs and to work alongside others who are building Rwanda&apos;s biotech sector.
      </p>
      <p>UVU Bio Rwanda remains a strategic partner for us in advancing biotechnology in the region.</p>

      <h2>Work with us</h2>
      <p>
        We are open to collaboration with research institutions and pharmaceutical companies.{' '}
        <Link to="/#contact" className="link">
          Get in touch
          <ArrowRight className="size-4" />
        </Link>
      </p>
    </ArticleLayout>
  );
}
