// useContent.js
import { ref, computed } from 'vue'

export function useContent() {
  const content = ref([
    {
      index: 0,
      picture: 'https://via.placeholder.com/150',
      title: 'Title 0',
      text: 'Text 0',
      altText: 'Alt text 0',
      audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    },
    {
      index: 1,
      picture: 'https://via.placeholder.com/150',
      title: 'Title 1',
      text: 'Text 1',
      altText: 'Alt text 1',
      audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    },
    {
      index: 2,
      picture: 'https://via.placeholder.com/150',
      title: 'Title 2',
      text: 'Text 2',
      altText: 'Alt text 2',
      audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    },
    {
      index: 3,
      picture: 'https://via.placeholder.com/150',
      title: 'Title 3',
      text: 'Text 3',
      altText: 'Alt text 3',
      audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    },
    {
      index: 4,
      picture: 'https://via.placeholder.com/150',
      title: 'Title 4',
      text: 'Text 4',
      altText: 'Alt text 4',
      audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    },
    // Add more items as needed...
  ])

  const numberOfContent = computed(() => content.value.length)

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



  return { content, numberOfContent, activeContent, setActiveContent }
}