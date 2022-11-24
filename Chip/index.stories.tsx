
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Chip1 from ".";

export default {
    component:Chip1
}as ComponentMeta<typeof Chip1>

const Template:ComponentStory<typeof Chip1>= (args) => <Chip1 {...args}/>
export const Chip = Template.bind({})
Chip.args={
    label:"a chip"
}