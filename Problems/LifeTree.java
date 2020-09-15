import java.util.*;


public class HelloWorld {
    public static void main(String[] args) {
      List<Relation> input = new ArrayList<>();
      input.add(new Relation("animal", "mammal"));
      input.add(new Relation("animal", "bird"));
      input.add(new Relation("lifeform", "animal"));
      input.add(new Relation("cat", "lion"));
      input.add(new Relation("mammal", "cat"));
      input.add(new Relation("animal", "fish"));
      
      printTree(input);
    }
    
    public static void printTree(List<Relation> rs) {
      List<String> newList;
      Map<String, List<String>> map = new HashMap();
      Set<String> children = new HashSet();
      
      for(Relation relation: rs) {
        children.add(relation.child);
        if(map.containsKey(relation.parent)) {
          map.get(relation.parent).add(relation.child);
        } else {
          newList = new ArrayList<>();
          newList.add(relation.child);
          map.put(relation.parent, newList);
        }
      }
      String root = "";
      for(Map.Entry<String, List<String>> entry: map.entrySet()) {
        if(!children.contains(entry.getKey())) {
          root = entry.getKey();
          break;
        }
      }
      dfs(root, 0, map);
    }
    
    public static void dfs(String root, int level, Map<String, List<String>> map) {
      for(var i=0; i<level; i++) {
        System.out.print("\t");
      }
      System.out.println(root);
      List<String> children;
      if(map.containsKey(root)) {
        children = map.get(root);
      } else {
        return;
      }
      for(String child: children) {
        dfs(child, level+1, map);
      }
    }
}


class Relation {
  String parent;
  String child;
  public Relation(String parent, String child) {
    this.parent = parent;
    this.child = child;
  }
}