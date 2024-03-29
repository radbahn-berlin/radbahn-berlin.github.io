// useContent.js
import { ref } from 'vue'

export function useContent() {
  const content = ref([
    {
      index: 0,
      picture: 'link-to-picture-0',
      title: 'Title 0',
      text: 'Text 0',
      altText: 'Alt text 0',
    },
    {
      index: 1,
      picture: 'link-to-picture-1',
      title: 'Title 1',
      text: 'Text 1',
      altText: 'Alt text 1',
    },
    // Add more items as needed...
  ])

  const activeContent = ref(content.value[0])

  const setActiveContent = (index) => {
    const foundContent = content.value.find(item => item.index === index)
    if (foundContent) {
      activeContent.value = foundContent
    } else {
      activeContent.value = {
        index: 'N/A',
        picture: '',
        title: 'Content not found',
        text: 'Please enter a valid index.',
        altText: 'Picture not found.',
      }
    }
  }



  return { activeContent, setActiveContent }
}