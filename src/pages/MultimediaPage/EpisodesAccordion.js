import {Grid} from "@mui/material";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import SectionContent from "../../components/SectionContent";
import SectionTitle from "../../components/SectionTitle";
import theme from "../../theme";
import EpisodeCardsList from './EpisodeCardsList';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';


export default function EpisodesAccordion({seasons = [], episodes = []}) {
    const [isExpanded, setIsExpanded] = React.useState({[seasons[0]]: true});
    const handleChange = (season) => () => {
        setIsExpanded({...isExpanded, [season]: !isExpanded[season]});
    };

    return (
        <SectionContent
            sx={{
                paddingRight: {xs: 0, md: 0},
                rowGap: {xs: 3, md: 5}
        }}>
            {seasons.map(seasonNumber => (
                <Grid item xs={12} key={seasonNumber}>
                    <Accordion expanded={isExpanded[seasonNumber]} onChange={handleChange(seasonNumber)} sx={{marginBottom: {xs: 3, md: 6}}}>
                        <AccordionSummary
                            expandIcon={<ArrowForwardIosSharpIcon/>}
                            aria-controls={`accordion-panel-${seasonNumber}`}
                            id={`accordion-panel-${seasonNumber}`}
                            sx={{
                                justifyContent: 'flex-start',
                                columnGap: 3,
                                flexGrow: 0,
                                padding: "0 16px",
                                '& .MuiAccordionSummary-content': {flexGrow: 0, marginLeft: theme.spacing(1)},
                                '& .MuiAccordionSummary-expandIconWrapper': {
                                    transform: 'rotate(90deg)',
                                    color: 'white',
                                    fontSize: '2rem'
                                },
                                '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                                    transform: 'rotate(-90deg)',
                                    color: 'white',
                                },
                                '& .MuiSvgIcon-root': {
                                    fontSize: '2rem',
                                    fontWeight: "200",
                                },
                                '& .MuiSvgIcon-root:hover': {
                                    color: '#C4FF00',
                                },
                            }}
                        >
                            <SectionTitle title={`Season ${seasonNumber}`}/>
                        </AccordionSummary>
                        <AccordionDetails sx={{paddingRight: 0}}>
                            <EpisodeCardsList seasonNumber={seasonNumber} episodes={episodes[seasonNumber]}/>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            ))}
        </SectionContent>
    );
}