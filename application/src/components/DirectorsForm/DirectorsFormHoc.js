import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import { graphql } from "react-apollo";

import { addDirectionMutation } from "./mutations";
import { directorsQuery } from "../DirectorsTable/queries";

import { styles } from './styles';

const withGraphAdd = graphql(addDirectionMutation, {
    props: ({ mutate }) => ({
        addDirector: director => mutate({
            variables: director,
            refetchQueries: [{ query: directorsQuery }],
        })
    }),
});

export default compose(withStyles(styles), withGraphAdd);
