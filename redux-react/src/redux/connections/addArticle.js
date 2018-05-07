import { connect } from 'react-redux';
import AddArticleForm from '../../components/addArticleForm';
import { addArticle } from '../actions/article'

const mapDispatchToProps = dispatch => {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
}

const AddArticle = connect(null, mapDispatchToProps)(AddArticleForm);
export default AddArticle;