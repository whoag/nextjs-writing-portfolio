import {Accordion, AccordionDetails, AccordionSummary, Box, Paper} from "@mui/material";
import Masonry from '@mui/lab/Masonry';
import {NAVLINKS} from "../../constants";
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({  }) => ({
    backgroundColor: "transparent",
    textAlign: "center",
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "1fr",
    placeItems: "center",
    padding: "1rem",
    borderRadius: "0.75rem"

}));
export default function ProjectBricks(){
    return(
        <Box sx={{ width: 800, minHeight: 377 }}>
            <Masonry columns={3} spacing={2}>
                {NAVLINKS.map((project, index) => {
                    if(index > 0){
                        return(
                            <a href={project.ref}  key={index *13} className="hover:bg-[#35297D] bg-[#281F5F] transition-all ease-in-out rounded-xl hover:scale-[1.1] shadow-lg hover:shadow-xl">
                                <StyledPaper sx={{ minHeight: project.height }}>
                                    <h3 className="text-white">{project.name}</h3>
                                </StyledPaper>
                            </a>
                        )
                    }

                })}
            </Masonry>
        </Box>
    )
}