import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import ViewMoreText from "react-native-view-more-text";

import CustomButton from "../CustomButton/CustomButton";

export default function TaskList({ date }) {
  const renderViewMore = (onPress) => {
    <Text style={styles.view} onPress={onPress}>
      View more
    </Text>;
  };

  const renderViewLess = (onPress) => {
    <Text style={styles.view} onPress={onPress}>
      View less
    </Text>;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.title}>Collect from MCP</Text>
      <ViewMoreText
        numberOfLines={3}
        renderViewMore={renderViewMore}
        renderViewLess={renderViewLess}
      >
        <Text style={styles.content}>
          Monkey is a common name that may refer to most mammals of the
          infraorder Simiiformes, also known as the simians. Traditionally, all
          animals in the group now known as simians are counted as monkeys
          except the apes, which constitutes an incomplete paraphyletic
          grouping; however, in the broader sense based on cladistics, apes
          (Hominoidea) are also included, making the terms monkeys and simians
          synonyms in regards to their scope.[citation needed][3] In 1812,
          Geoffroy grouped the apes and the Cercopithecidae group of monkeys
          together and established the name Catarrhini, "Old World monkeys",
          ("singes de l'Ancien Monde" in French).[3][4][5] The extant sister of
          the Catarrhini in the monkey ("singes") group is the Platyrrhini (New
          World monkeys).[3] Some nine million years before the divergence
          between the Cercopithecidae and the apes,[6] the Platyrrhini emerged
          within "monkeys" by migration to South America from Afro-Arabia (the
          Old World),[citation needed][7][8] likely by ocean.[9][10][better
          source needed] Apes are thus deep in the tree of extant and extinct
          monkeys, and any of the apes is distinctly closer related to the
          Cercopithecidae than the Platyrrhini are. Many monkey species are
          tree-dwelling (arboreal), although there are species that live
          primarily on the ground, such as baboons. Most species are mainly
          active during the day (diurnal). Monkeys are generally considered to
          be intelligent, especially the Old World monkeys. Within suborder
          Haplorhini, the simians are a sister group to the tarsiers – the two
          members diverged some 60 million years ago. New World monkeys and
          catarrhine monkeys emerged within the simians roughly 35 million years
          ago. Old World monkeys and apes emerged within the catarrhine monkeys
          about 25 million years ago. Extinct basal simians such as
          Aegyptopithecus or Parapithecus (35–32 million years ago) are also
          considered monkeys by primatologists.[11][9][12][13][14][15] Lemurs,
          lorises, and galagos are not monkeys, but strepsirrhine primates
          (suborder Strepsirrhini). The simians' sister group, the tarsiers, are
          also haplorhine primates; however, they are also not monkeys. Apes
          emerged within monkeys as sister of the Cercopithecidae in the
          Catarrhini, so cladistically they are monkeys as well. However, there
          has been resistance to directly designate apes (and thus humans) as
          monkeys, so "Old World monkey" may be taken to mean either the
          Cercopithecoidea (not including apes) or the Catarrhini (including
          apes).[16][17][18][19][20][21][22][23][24] That apes are monkeys was
          already realized by Georges-Louis Leclerc, Comte de Buffon in the 18th
          century.[25] Linnaeus placed this group in 1758 together with the
          tarsiers, in a single genus "Simia" (sans Homo), an ensemble now
          recognised as the Haplorhini.[26] Monkeys, including apes, can be
          distinguished from other primates by having only two pectoral nipples,
          a pendulous penis, and a lack of sensory whiskers.[27][better source
          needed]
        </Text>
      </ViewMoreText>

      {/* <Pressable onPress={() => {}} style={styles.button}>
        <Text style={styles.Text}>Check in</Text>
      </Pressable>
      <Pressable onPress={() => {}} style={styles.button}>
        <Text>Check out</Text>
      </Pressable> */}
      <View style={styles.fixToRow}>
        <CustomButton text="Check in" onPress={() => {}} type="GROUP" />
        <CustomButton text="Check out" onPress={() => {}} type="GROUP" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    minHeight: 200,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
  },
  date: {
    color: "#8F9BB3",
    padding: 5,
    fontSize: 15,
  },
  title: {
    left: 24,
    right: 40.48,

    fontWeight: "600",
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 1,

    color: "#222B45",
  },
  content: {
    lineHeight: 18,
  },
  view: {
    color: "red",
  },
  fixToRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
});
