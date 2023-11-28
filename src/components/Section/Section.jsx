import PropTypes from 'prop-types';
import css from './Section.module.css';
const Section = ({ title, children }) => {
    return (
      <section>
        <h1 className={css.maintitle}>{title}</h1>
        {children}
      </section>
    );
};

Section.propTypes = {
    title: PropTypes.string,
};

export default Section;