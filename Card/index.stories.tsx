import { ComponentMeta, ComponentStory } from "@storybook/react";
import Card1 from ".";
import CalendarMonthOutlined from "@mui/icons-material/CalendarMonthOutlined";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
export default {
  component: Card1,
} as ComponentMeta<typeof Card1>;

const Template: ComponentStory<typeof Card1> = (args) => <Card1 {...args}/>;
export const Card = Template.bind({});
Card.args = {
  ChipLabel:"Due in 30 day(s)",
  Icon1:<CalendarMonthOutlined color='primary' sx={{width: "60px",height: "60px",flex: "none",order: 0,flexGrow: 0}}/>,
  text1:"Due-May 03,2021",
  Icon2:<InfoOutlinedIcon fontSize="small" />,
  text2:"$14,204.55"
};
