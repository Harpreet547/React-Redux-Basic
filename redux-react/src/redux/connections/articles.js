import { connect } from 'react-redux';
import Articles from '../../components/articles';

const mapStateToProps = state => {
    return {
        articles: state.articles
    };
};

const ArticleList = connect(mapStateToProps)(Articles);
export default ArticleList;